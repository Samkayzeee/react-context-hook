const Modal = (props) => {
    return(
        <>
       
<button type="button" class="btn btn-primary mt-3 ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal" id="sign up">
  {props.click}
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eius, sequi ipsa itaque voluptatibus eaque, dolorem praesentium, perspiciatis fuga quisquam maxime incidunt obcaecati? Incidunt at expedita fugiat omnis. Sed, molestias.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Modal;