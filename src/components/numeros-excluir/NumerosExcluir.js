import React, {useState}  from 'react';
import {useDispatch} from 'react-redux'

function NumerosExcluir() {
  const dispatch = useDispatch();
  const [excludes, setExcludes] = useState({ nr1:0, nr2:0, nr3:0, nr4:0, nr5: 0});

  const onClickNumber = () => {
    dispatch({type:'EXCLUDE_NUMBER', excludes})
  }

  const onChangeNumber = (evt) => {
    setExcludes({...excludes, [evt.target.name] : parseInt(evt.target.value)});
  }

  return (
    <div class="input-group">
    <div class="input-group-prepend">
      <button class="input-group-text" alt="Click aqui para exvluir" onClick={onClickNumber}>Números para excluir</button>
    </div>
    <input type="number" name="nr1" onChange={onChangeNumber} max="22" min="1" maxLength="2" minLength="1" className="form-control ml-1"/>
    <input type="number" name="nr2" onChange={onChangeNumber} max="25" min="1" maxLength="2" minLength="1" className="form-control ml-1"/>
    <input type="number" name="nr3" onChange={onChangeNumber} max="25" min="1" maxLength="2" minLength="1" className="form-control ml-1"/>
    <input type="number" name="nr4" onChange={onChangeNumber} max="25" min="1" maxLength="2" minLength="1" className="form-control ml-1"/>
    <input type="number" name="nr5" onChange={onChangeNumber} max="25" min="1" maxLength="2" minLength="1" className="form-control ml-1"/>
  </div>
  );
}
      
export default NumerosExcluir;
