import customtkinter as ctk
import sqlite3
from tkinter import messagebox, ttk

# =========================
# DATABASE SETUP
# =========================
def koneksi():
    return sqlite3.connect("database.db")

def init_db():
    conn = koneksi()
    cursor = conn.cursor()

    # tabel user
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT
        )
    """)

    # tabel surat
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS surat (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            no_surat TEXT,
            perihal TEXT,
            tanggal TEXT
        )
    """)

    # default user (admin)
    cursor.execute("SELECT * FROM users WHERE username='admin'")
    if not cursor.fetchone():
        cursor.execute("INSERT INTO users (username, password) VALUES ('admin','admin')")

    conn.commit()
    conn.close()

# =========================
# LOGIN FUNCTION
# =========================
def login():
    user = entry_user.get()
    pw = entry_pass.get()

    conn = koneksi()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (user, pw))
    data = cursor.fetchone()
    conn.close()

    if data:
        frame_login.pack_forget()
        tampilkan_dashboard()
    else:
        messagebox.showerror("Error", "Username atau password salah!")

# =========================
# DASHBOARD
# =========================
def tampilkan_dashboard():
    global entry_no, entry_perihal, entry_tgl, tree

    frame_dash.pack(fill="both", expand=True)

    entry_no = ctk.CTkEntry(frame_dash, placeholder_text="Nomor Surat")
    entry_no.pack(pady=5)

    entry_perihal = ctk.CTkEntry(frame_dash, placeholder_text="Perihal")
    entry_perihal.pack(pady=5)

    entry_tgl = ctk.CTkEntry(frame_dash, placeholder_text="Tanggal")
    entry_tgl.pack(pady=5)

    btn = ctk.CTkButton(frame_dash, text="Simpan", command=simpan)
    btn.pack(pady=10)

    columns = ("ID","No Surat","Perihal","Tanggal")
    tree = ttk.Treeview(frame_dash, columns=columns, show="headings")

    for col in columns:
        tree.heading(col, text=col)

    tree.pack(fill="both", expand=True)

    tampil_data()

# =========================
# CRUD
# =========================
def simpan():
    conn = koneksi()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO surat (no_surat, perihal, tanggal) VALUES (?,?,?)",
        (entry_no.get(), entry_perihal.get(), entry_tgl.get())
    )
    conn.commit()
    conn.close()

    tampil_data()
    messagebox.showinfo("Sukses","Data tersimpan")

def tampil_data():
    for i in tree.get_children():
        tree.delete(i)

    conn = koneksi()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM surat")

    for row in cursor.fetchall():
        tree.insert("", "end", values=row)

    conn.close()

# =========================
# UI
# =========================
ctk.set_appearance_mode("dark")

app = ctk.CTk()
app.geometry("600x500")
app.title("Aplikasi Arsip Desa")

# LOGIN FRAME
frame_login = ctk.CTkFrame(app)
frame_login.pack(expand=True)

entry_user = ctk.CTkEntry(frame_login, placeholder_text="Username")
entry_user.pack(pady=10)

entry_pass = ctk.CTkEntry(frame_login, placeholder_text="Password", show="*")
entry_pass.pack(pady=10)

btn_login = ctk.CTkButton(frame_login, text="Login", command=login)
btn_login.pack(pady=10)

# DASHBOARD FRAME
frame_dash = ctk.CTkFrame(app)

# INIT DB
init_db()

app.mainloop()