@echo off
REM ============================================================================
REM WINTER Installer for Windows: download this file and double-click it.
REM It runs scripts/install.ps1 from the public repo, then waits for a key so the
REM window never vanishes before the user reads the result.
REM ============================================================================

echo.
echo  WINTER Installer
echo  Memasang WINTER. Ini bisa makan waktu 10-20 menit, jangan tutup jendela ini.
echo.

powershell -ExecutionPolicy ByPass -NoProfile -Command "iex (irm https://raw.githubusercontent.com/rifqirizqullah1453-cell/winter/main/scripts/install.ps1)"

echo.
if %ERRORLEVEL% NEQ 0 (
    echo  Pemasangan gagal. Foto layar ini lalu kirim ke pembuat WINTER.
) else (
    echo  Selesai! Buka WINTER lewat ikon WINTER di Desktop.
)
echo.
pause
