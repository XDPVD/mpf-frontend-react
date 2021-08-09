import { render, screen } from '@testing-library/react';
import SelectOption from '../SelectOption';
import BaseComponent from '@mocks/BaseComponent';


describe('SelectOption', () => {
  beforeEach(() => {
    render(
      <BaseComponent>
        <SelectOption valueSelected={10} handleOnChange={()=>{}} />
      </BaseComponent>
    );
  });

  it('should render the select option', async () => {
    const input = screen.getByTestId("select-option");

    expect(input).toBeInTheDocument();
  });

});
