import React from 'react';

function NumerosExcluir() {
  return (
    <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="">Números para excluir</span>
    </div>
    <input type="number" max="22" min="1" maxlength="2" minlength="1" class="form-control ml-1"/>
    <input type="number" max="25" min="1" maxlength="2" minlength="1" class="form-control ml-1"/>
    <input type="number" max="25" min="1" maxlength="2" minlength="1" class="form-control ml-1"/>
    <input type="number" max="25" min="1" maxlength="2" minlength="1" class="form-control ml-1"/>
    <input type="number" max="25" min="1" maxlength="2" minlength="1" class="form-control ml-1"/>
  </div>
  );
}
      
export default NumerosExcluir;
