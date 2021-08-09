import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function SelectTipo({
  open,
  handleClose,
  handleOpenList,
  tipo,
  handleChange,
  menuItems,
}) {
  return (
    <>
      <FormControl
        style={{
          minWidth: 120,
        }}
        data-testid="select-tipo"
      >
        <InputLabel>Tipo</InputLabel>
        <Select
          name='tipo'
          open={open}
          onClose={handleClose}
          onOpen={handleOpenList}
          value={tipo}
          onChange={handleChange}
        >
          {menuItems.map((elem) => {
            return <MenuItem value={elem.value}>{elem.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectTipo;
