---
title: Template
sidebar_label: Template
sidebar_position: 1
---



### Decation

```powershell
if($true){
    return 1
}else{
    return 0
}
```

### Remediate

```powershell
try {
    Exit 0
}
catch {
    Write-Error $_
    Exit 1
}
```
