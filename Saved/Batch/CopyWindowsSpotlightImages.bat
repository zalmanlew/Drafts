xcopy /f "%LocalAppData%\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\*" "%UserProfile%\Desktop\WinImages\*.jpg" /Y

cd "%UserProfile%\Desktop\WinImages"
@echo off
setlocal
for /f  "usebackq delims=;" %%A in (`dir /b *.jpg`) do If %%~zA LSS 200000 del "%%A"
