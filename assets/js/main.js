const addImage = document.querySelector('.addImage');
const images = document.querySelector('.images');

addImage.addEventListener('change', function() {
  const imageBlock = images.appendChild(document.createElement('div'));
  imageBlock.classList.add('imageBlock');
  
  const loader = imageBlock.appendChild(document.createElement('div'));
  loader.classList.add('lds-hourglass');

  if(this.files && this.files[0] && this.files[0].size <= 10000000) {
    const reader = new FileReader();
    reader.onload = imageLoaded;
    reader.readAsDataURL(this.files[0]);
  } else {
    imageBlock.remove();
    alert('No more 10MB');
  }

  function imageLoaded(e) {
    loader.remove();
    const result = e.target.result;

    const image = imageBlock.appendChild(document.createElement('img'));
    image.src = result;
    image.classList.add('image');

    const deleteImage = imageBlock.appendChild(document.createElement('button'))
    deleteImage.classList.add('deleteImage');
    deleteImage.innerHTML = 'X';
    deleteImage.addEventListener('click', (e) => e.target.parentElement.remove());
  }
});
