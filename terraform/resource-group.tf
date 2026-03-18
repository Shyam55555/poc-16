data "azurerm_resource_group" "rg" {
  name = "devops"
}

locals {
  resource_group_name = data.azurerm_resource_group.rg.name
}
