import M from 'materialize-css'

export default function showError(message) {
  M.toast({
    html: `<h5 style="margin: 0 20px 0 0">Error</h5><div>${message}</div>`,
    classes: 'rounded deep-orange lighten-1 white-text valign-wrapper',
  })
}
