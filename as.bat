@echo off



:repeat
npm test
timeout /t 60
taskkill /IM node.exe /F
goto repeat