---
title: Intune Remediation
sidebar_label: Intune Remediation
sidebar_position: 1
---

## What is Intune Remediation?

Microsoft Intune is a cloud-based service that focuses on mobile device management (MDM) and mobile application management (MAM). Remediation in Intune refers to the process of enforcing or ensuring compliance on devices. If a device is detected as non-compliant based on the policies set, Intune can take corrective actions to bring it back to a compliant state.

## Why is Remediation Important?

1. **Security**: Ensuring devices adhere to security policies keeps company data safe.
2. **Consistency**: Guarantees a uniform baseline of device configuration across the organization.
3. **Audit & Compliance**: Helps in meeting regulatory requirements by ensuring all devices meet the stipulated standards.

## Setting Up Remediation Actions in Intune:

1. **Login to the Azure portal** and navigate to the Intune blade.
2. Under `Device Compliance`, select `Policies`.
3. Choose or create a policy where you'd like to set remediation actions.
4. Under `Actions for non-compliance`, you can set up the desired actions like sending email notifications, marking devices as non-compliant, or even retiring/wiping a device in extreme cases.

## Common Remediation Scenarios:

### Device Not Updated:
If a device is not updated to the latest OS version, Intune can be set to prompt users to update their device.

### Unauthorized Applications:
If a device has applications that aren't allowed by the company's policy, Intune can automatically uninstall these apps or prompt the user to do so.

### Device Encryption:
If a device isn't encrypted and the policy requires it, Intune can enforce encryption ensuring data security.

## Monitoring Remediation:

Using the Intune portal, administrators can monitor the state of devices, see which devices are non-compliant, and track the remediation steps taken.

## Conclusion:

Intune Remediation is a powerful feature that ensures devices in an organization adhere to set standards. Regularly monitoring and updating the policies can help in maintaining a secure and consistent environment.


Task List	
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media



