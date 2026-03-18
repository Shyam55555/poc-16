output "acr_login_server" {
  description = "ACR Login Server"
  value = try(
    azurerm_container_registry.acr[0].login_server,
    data.azurerm_container_registry.existing.login_server
  )
}

output "aks_name" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "cosmos_endpoint" {
  value = azurerm_cosmosdb_account.cosmos.endpoint
}
