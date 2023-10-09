---
title: Intune Sync
sidebar_label: Intune Sync
sidebar_position: 1
---



### Decation

```powershell
# Create variable for the time of the last Intune sync.
$PushInfo = Get-ScheduledTask -TaskName PushLaunch | Get-ScheduledTaskInfo
$LastPush = $PushInfo.LastRunTime
$CurrentTime=(GET-DATE)

# Calculate the time difference between the current date/time and the date stored in the variable.
$TimeDiff = New-TimeSpan -Start $LastPush -End $CurrentTime

# If/Else statement checking whether the Time Difference between the Last Sync and the current time is less or greater than 2 days
if ($TimeDiff.Days -gt 2) {
    # The time difference is more than 2 days
    Write-Host "Last Sync was more than 2 days ago"
    Exit 1
} else {
    # The time difference is less than 2 days
    Write-Host "Sync Complete"
    Exit 0
}
```

### Remediate

```powershell
try {
    Get-ScheduledTask | ? {$_.TaskName -eq 'PushLaunch'} | Start-ScheduledTask
    Exit 0
}
catch {
    Write-Error $_
    Exit 1
}
```
