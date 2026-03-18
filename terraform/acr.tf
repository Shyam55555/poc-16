############################################
# Try to read existing ACR
############################################

data "azurerm_container_registry" "existing" {
  name                = var.acr_name
  resource_group_name = local.resource_group_name
}

############################################
# Create ACR only if not present
############################################

resource "azurerm_container_registry" "acr" {
  count               = can(data.azurerm_container_registry.existing.id) ? 0 : 1

  name                = var.acr_name
  resource_group_name = local.resource_group_name
  location            = var.location
  sku                 = "Basic"
  admin_enabled       = true
}

############################################
# Common reference (use everywhere)
############################################

locals {
  acr_id = try(
    azurerm_container_registry.acr[0].id,
    data.azurerm_container_registry.existing.id
  )
}
