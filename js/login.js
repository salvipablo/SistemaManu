const InpUserName = document.getElementById('userName')
const InpUserPassword = document.getElementById('userPassword')
const BtnLoginButton = document.getElementById('btnLoginButton')
const BtnAccept = document.getElementById('btnAccept')
const CntModalWinNotice = document.getElementById('cntModalWinNotice')
const TxtModalNotice = document.getElementById('txtModalNotice')

//#region Functions
const login = () => {
  if (InpUserName.value == '' || InpUserPassword.value == '') return 'Algunos de los campos no fue cargado.'
  if (InpUserName.value == 'psalvi' && InpUserPassword.value == 'olimpo10') return 'Permiso concedido.'
  return 'Permiso denegado'
}
//#endregion Functions

//#region Events
  BtnLoginButton.addEventListener('click', () => {
    let statusLogin = login()

    TxtModalNotice.innerText = statusLogin

    if (statusLogin !== 'Permiso concedido.') CntModalWinNotice.classList.toggle('cntModalWinNotice-noShow')
    else {
      sessionStorage.setItem("userCons", "psalvi")
      location.assign("./index.html")
    }
  })

  BtnAccept.addEventListener('click', () => {
    CntModalWinNotice.classList.toggle('cntModalWinNotice-noShow')
  })
//#endregion Events