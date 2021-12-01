const profileModalBody = $("#profileModal .modal-body")[0];
const profileModalFooter = $("#profileModal .modal-footer")[0];
let userid = null;

function inputsGenerator(targetUser, classname) {
  let inputsBody = "";
  for (const key in targetUser) {
    const value = targetUser[key];
    inputsBody += `<div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">${key}</label>
      ${key === "avatar"
        ? `<input class="update-input form-control form-control-sm ${classname}" name="${key}" value="${value}" type="file">`
        : `<input type="email" class="form-control update-input ${classname}" name="${key}" value="${value}">`
      }
        </div>`;
  }
}

function renderUserInfo(id) {
  userid = id;
  const targetUser = dataset.find((el) => el.id === Number(userid));
  let userInfoModalFooter = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" onclick="renderUpdateModal()">Edit</button>`;
  let userInfoModalBody = "";
  for (const key in targetUser) {
    const value = targetUser[key];
    userInfoModalBody += `<p><span>${key}</span> : <span>${value}</span></p>`;
  }
  $(profileModalBody).html(userInfoModalBody);
  $(profileModalFooter).html(userInfoModalFooter);
}

function renderAddUserModal() {
  const targetUser = {
    avatar: "",
    email: "",
    first_name: "",
    id: Math.max(...dataset.map((el) => el.id)) + 1,
    last_name: "",
  };
  let addUserModalFooter = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="create()">Create</button>`;
  let addUserModalBody = "";
  for (const key in targetUser) {
    const value = targetUser[key];
    addUserModalBody += `<div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">${key}</label>
        ${key === "avatar"
        ? `<input class="update-input form-control form-control-sm" name="${key}" value="${value}" type="file">`
        : `<input type="email" class="form-control update-input" name="${key}" value="${value}">`
      }
      </div>`;
  }
  $(profileModalBody).html(addUserModalBody);
  $(profileModalFooter).html(addUserModalFooter);
}

function renderUpdateModal() {
  const targetUser = dataset.find((el) => el.id === Number(userid));
  let updateInfoModalFooter = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="update()">Update</button>
  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="remove()">Delete</button>`;
  let updateInfoModalBody = inputsGenerator(targetUser, "update-input");
  $(profileModalBody).html(updateInfoModalBody);
  $(profileModalFooter).html(updateInfoModalFooter);
}

function renderAddUserModal(id) {
  const targetUser = {
    id: Math.max(...dataset.map((el) => el.id)) + 1,
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  };
  let addUserModalFooter = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="create()">Create</button>`;
  let addUserModalBody = inputsGenerator(targetUser, "create-input");
  $(profileModalBody).html(addUserModalBody);
  $(profileModalFooter).html(addUserModalFooter);
}