const container = $(".container-lg")[0];
const pagination = $(".pagination")[0];
const Card = (
  avatar,
  email,
  id
) => `<div class="col-12 col-sm-6 col-md-4 p-2 mt-4"><div class="card ">
<img src="${avatar}" class="card-img-top">
<div class="card-body">
  <h5 class="card-title">ID:${id}</h5>
  <p class="card-text">E-mail: ${email}</p>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profileModal" onclick="renderUserInfo(${id})">
  User Profile
</button>
</div>
</div></div>`;

const paginationItem = (
  content,
  disabled = false,
  isActive = false
) => `<li class="page-item ${disabled ? "disabled" : ""} ${
  isActive ? "active" : ""
}" onclick="changePage(${
  content === "Next" ? page + 1 : content === "Previous" ? page - 1 : content
})">
<a class="page-link">${content}</a>
</li>
`;

function containerRender() {
  let containerContent = [];
  for (const person of dataset) {
    containerContent.push(Card(person.avatar, person.email, person.id));
  }
  console.log(container);
  
  $(container).html(
    containerContent.slice(page * perpage - perpage, page * perpage).join("")
  );
}
function paginationRender() {
  let paginationContent = "";
  for (let index = 0; index < total_pages + 2; index++) {
    if (index === 0)
      paginationContent += paginationItem("Previous", page === 1);
    else if (index === total_pages + 1)
      paginationContent += paginationItem("Next", page == total_pages);
    else if (index === page)
      paginationContent += paginationItem(index, false, true);
    else paginationContent += paginationItem(index, false);
  }
  $(pagination).html(paginationContent);
}
function changePage(number) {
  if (Number(number) < 1 || Number(number) > total_pages) return null;
  page = Number(number);
  render();
}
function render() {
  containerRender();
  paginationRender();
}
