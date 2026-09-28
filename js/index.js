const CntMaterials = document.getElementById('cntMaterials')
const IconCntMaterialsDown = document.getElementById('iconCntMaterialsDown')
const iconCntMaterialsUp = document.getElementById('iconCntMaterialsUp')

const CntDataLoading = document.getElementById('cntDataLoading')
const IconCntDataLoadingDown = document.getElementById('iconCntDataLoadingDown')
const IconCntDataLoadingUp = document.getElementById('iconCntDataLoadingUp')




const sideTab = document.getElementById('sideTab');
const sideModal = document.getElementById('sideModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalFooterBtn = document.getElementById('closeModalFooterBtn');
const openModalBtn = document.getElementById('openModalBtn');




//#region Events

  //#region Drop Buttons
    IconCntMaterialsDown.addEventListener('click', () => {
      CntMaterials.classList.toggle('cntSectionDropMat_noShow')
      IconCntMaterialsDown.classList.toggle('cnt_iconDrop-noShow')
      iconCntMaterialsUp.classList.toggle('cnt_iconDrop-noShow')
    })

    iconCntMaterialsUp.addEventListener('click', () => {
      CntMaterials.classList.toggle('cntSectionDropMat_noShow')
      IconCntMaterialsDown.classList.toggle('cnt_iconDrop-noShow')
      iconCntMaterialsUp.classList.toggle('cnt_iconDrop-noShow')
    })

    IconCntDataLoadingDown.addEventListener('click', () => {
      CntDataLoading.classList.toggle('cntDataLoading_noShow')
      IconCntDataLoadingDown.classList.toggle('cnt_iconDrop-noShow')
      IconCntDataLoadingUp.classList.toggle('cnt_iconDrop-noShow')
    })

    IconCntDataLoadingUp.addEventListener('click', () => {
      CntDataLoading.classList.toggle('cntDataLoading_noShow')
      IconCntDataLoadingDown.classList.toggle('cnt_iconDrop-noShow')
      IconCntDataLoadingUp.classList.toggle('cnt_iconDrop-noShow')
    })
  //#endregion Drop Buttons

    sideTab.addEventListener('click', openModal);
    if (openModalBtn) openModalBtn.addEventListener('click', openModal);

    // Event Listeners para Cerrar
    closeModalBtn.addEventListener('click', closeModal);
    closeModalFooterBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Cerrar la modal al presionar la tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sideModal.classList.contains('active')) {
        closeModal();
      }
    });


//#endregion Events


function openModal() {
    sideModal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evita el scroll de la página de fondo
}

// Función para cerrar la ventana modal
function closeModal() {
    sideModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaura el scroll
}






// Get saved data from sessionStorage
const UserLoggedIn = sessionStorage.getItem("userCons");

if (!UserLoggedIn) location.assign("./login.html");
// else console.log(UserLoggedIn);

// window.onload = (event) => {
//   console.log("page is fully loaded");
// };