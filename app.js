// Selecting The Container.
const container = document.querySelector('.container');
// The Scroll Event.
window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(createPost,100);

	}
});
// It append it to the container.
function createPost(){
	const post = document.createElement('div');
	post.className = 'text';
	post.innerHTML = `<div class="grid-container">
    <div class="grid-item">
      <div class="card">
        <div class="text">
          <img src="image/cat.jpg" alt="" style="width:100%;">
        </div>
      </div>
    </div>
    <div class="grid-item">
      <div class="card">
        <div class="text">
          <img src="image/cat2.jpg" alt="" style="width:100%;">
        </div>
      </div>
    </div>
  </div>`;
//   Appending the post to the container.
	container.appendChild(post);
}
