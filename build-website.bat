
import os

base_path = r"D:\Projects\Landing Page"

# Create a comprehensive CMD batch file that does everything
# This is more reliable than PowerShell scripts

build_cmd = r'''@echo off
chcp 65001 >nul
title Kopi Langit - Website Builder
echo ============================================
echo   KOPI LANGIT - Website Builder
echo ============================================
echo.

REM Step 1: Check Node.js
echo [1/6] Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js belum terinstall!
    echo         Download dari: https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%a in ('node --version') do set NODE_VER=%%a
echo [OK] Node.js %NODE_VER%

REM Step 2: Install dependencies
echo.
echo [2/6] Installing dependencies...
if not exist "node_modules" (
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install gagal!
        pause
        exit /b 1
    )
) else (
    echo [OK] node_modules sudah ada
)

REM Step 3: Fix files
echo.
echo [3/6] Fixing project files...

REM Fix next.config.js
echo module.exports = {^>"next.config.js"
echo   output: 'export',^>^>"next.config.js"
echo   images: {^>^>"next.config.js"
echo     unoptimized: true,^>^>"next.config.js"
echo   },^>^>"next.config.js"
echo   trailingSlash: true,^>^>"next.config.js"
echo }^>^>"next.config.js"
echo [OK] next.config.js

REM Fix button.tsx - create simple version without radix-ui
echo import * as React from "react";^>"src\components\ui\button.tsx"
echo import { cva, type VariantProps } from "class-variance-authority";^>^>"src\components\ui\button.tsx"
echo import { cn } from "@/lib/utils";^>^>"src\components\ui\button.tsx"
echo.^>^>"src\components\ui\button.tsx"
echo const buttonVariants = cva(^>^>"src\components\ui\button.tsx"
echo   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",^>^>"src\components\ui\button.tsx"
echo   {^>^>"src\components\ui\button.tsx"
echo     variants: {^>^>"src\components\ui\button.tsx"
echo       variant: {^>^>"src\components\ui\button.tsx"
echo         default: "bg-primary text-primary-foreground hover:bg-primary/90",^>^>"src\components\ui\button.tsx"
echo         destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",^>^>"src\components\ui\button.tsx"
echo         outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",^>^>"src\components\ui\button.tsx"
echo         secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",^>^>"src\components\ui\button.tsx"
echo         ghost: "hover:bg-accent hover:text-accent-foreground",^>^>"src\components\ui\button.tsx"
echo         link: "text-primary underline-offset-4 hover:underline",^>^>"src\components\ui\button.tsx"
echo       },^>^>"src\components\ui\button.tsx"
echo       size: {^>^>"src\components\ui\button.tsx"
echo         default: "h-10 px-4 py-2",^>^>"src\components\ui\button.tsx"
echo         sm: "h-9 rounded-md px-3",^>^>"src\components\ui\button.tsx"
echo         lg: "h-11 rounded-md px-8",^>^>"src\components\ui\button.tsx"
echo         icon: "h-10 w-10",^>^>"src\components\ui\button.tsx"
echo       },^>^>"src\components\ui\button.tsx"
echo     },^>^>"src\components\ui\button.tsx"
echo     defaultVariants: {^>^>"src\components\ui\button.tsx"
echo       variant: "default",^>^>"src\components\ui\button.tsx"
echo       size: "default",^>^>"src\components\ui\button.tsx"
echo     },^>^>"src\components\ui\button.tsx"
echo   }^>^>"src\components\ui\button.tsx"
echo );^>^>"src\components\ui\button.tsx"
echo.^>^>"src\components\ui\button.tsx"
echo export interface ButtonProps extends React.ButtonHTMLAttributes^<HTMLButtonElement^>, VariantProps^<typeof buttonVariants^> {^>^>"src\components\ui\button.tsx"
echo   asChild?: boolean;^>^>"src\components\ui\button.tsx"
echo }^>^>"src\components\ui\button.tsx"
echo.^>^>"src\components\ui\button.tsx"
echo const Button = React.forwardRef^<HTMLButtonElement, ButtonProps^>((^>^>"src\components\ui\button.tsx"
echo   { className, variant, size, asChild = false, ...props }, ref^>^>"src\components\ui\button.tsx"
echo ) =^> {^>^>"src\components\ui\button.tsx"
echo   return (^>^>"src\components\ui\button.tsx"
echo     ^<button^>^>"src\components\ui\button.tsx"
echo       className={cn(buttonVariants({ variant, size, className }))}^>^>"src\components\ui\button.tsx"
echo       ref={ref}^>^>"src\components\ui\button.tsx"
echo       {...props}^>^>"src\components\ui\button.tsx"
echo     /^>^>^>"src\components\ui\button.tsx"
echo   );^>^>"src\components\ui\button.tsx"
echo });^>^>"src\components\ui\button.tsx"
echo Button.displayName = "Button";^>^>"src\components\ui\button.tsx"
echo.^>^>"src\components\ui\button.tsx"
echo export { Button, buttonVariants };^>^>"src\components\ui\button.tsx"
echo [OK] button.tsx

REM Create public/images folder and placeholder
if not exist "public\images" mkdir "public\images"
echo ^<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"^>^>"public\images\placeholder.svg"
echo   ^<rect width="800" height="600" fill="#1a120e"/^>^>"public\images\placeholder.svg"
echo   ^<circle cx="400" cy="300" r="150" fill="#2c1e16" stroke="#4a3426" stroke-width="2"/^>^>"public\images\placeholder.svg"
echo   ^<text x="400" y="290" text-anchor="middle" font-family="serif" font-size="72" fill="#d2bab0"^>^>"public\images\placeholder.svg"
echo     &#9749;^>^>"public\images\placeholder.svg"
echo   ^</text^>^>^>"public\images\placeholder.svg"
echo   ^<text x="400" y="360" text-anchor="middle" font-family="serif" font-size="24" fill="#a07e6a"^>Kopi Langit^</text^>^>^>"public\images\placeholder.svg"
echo   ^<text x="400" y="390" text-anchor="middle" font-family="serif" font-size="14" fill="#6f4e37"^>Bandung^</text^>^>^>"public\images\placeholder.svg"
echo ^</svg^>^>^>"public\images\placeholder.svg"
echo [OK] placeholder.svg

REM Step 4: Clean old builds
echo.
echo [4/6] Cleaning old builds...
if exist ".next" (
    rmdir /s /q ".next"
    echo [OK] .next cleaned
)
if exist "dist" (
    rmdir /s /q "dist"
    echo [OK] dist cleaned
)

REM Step 5: Build
echo.
echo [5/6] Building website...
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ============================================
    echo [ERROR] BUILD GAGAL!
    echo ============================================
    echo.
    echo Coba perbaiki manual atau hubungi developer
    pause
    exit /b 1
)

REM Step 6: Verify
echo.
echo [6/6] Verifying output...
if exist "dist\index.html" (
    echo [OK] dist\index.html ditemukan!
    echo [OK] Build berhasil!
) else (
    echo [ERROR] dist\index.html tidak ditemukan!
    pause
    exit /b 1
)

echo.
echo ============================================
echo   BUILD BERHASIL!
echo ============================================
echo.
echo Output: D:\Projects\Landing Page\dist\
echo.
echo Yang perlu diganti sebelum deploy:
echo   1. Ganti nomor WA: Cari '6281234567890'
echo   2. Ganti foto: public\images\placeholder.svg
echo   3. Update menu: src\components\sections\Menu.tsx
echo.
echo Cara deploy:
echo   - Vercel/Netlify: Upload isi folder dist\
echo   - cPanel: Upload isi dist\ ke public_html\
echo.
pause
'''

# Write the batch file
with open(os.path.join(base_path, "BUILD-WEBSITE.bat"), "w", encoding="utf-8") as f:
    f.write(build_cmd)

# Verify
bat_path = os.path.join(base_path, "BUILD-WEBSITE.bat")
size = os.path.getsize(bat_path)
print(f"✅ Created: BUILD-WEBSITE.bat ({size:,} bytes)")
print()
print("CARA MENGGUNAKAN:")
print("1. Buka File Explorer")
print("2. Masuk ke D:\Projects\Landing Page")
print("3. DOUBLE-CLICK file BUILD-WEBSITE.bat")
print("4. Tunggu sampai selesai")
print()
print("Note: File BAT ini pasti jalan di Windows tanpa PowerShell")
