import { render, screen } from '@testing-library/react';
import SelectTipo from '../SelectTipo';
import BaseComponent from '@mocks/BaseComponent';

describe('SelectTipo', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <SelectTipo open={true}
  handleClose={()=>{}}
  handleOpenList={()=>{}}
  tipo="Tipo"
  handleChange={()=>{}}
  menuItems={[{value:1,
  title:"Valor"}]}

  />
      </BaseComponent>
    );
  });

  it('should render the select option', async () => {
    const input = screen.getByTestId("select-tipo");

    expect(input).toBeInTheDocument();
  });

});
