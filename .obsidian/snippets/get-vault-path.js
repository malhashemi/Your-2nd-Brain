setTimeout(() => {
  if (window.app && window.app.vault) {
    const vaultPath = window.app.vault.adapter.basePath;
    console.log('Vault Path:', vaultPath);
  }
}, 1000);
