import './MealComposer.css';
import { Table } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const Plate = () => {
  const { ingredients, setIngredients } = useContext(LoginContext);

  return (
    <div className="plateMainDiv">
      {' '}
      <div className="plateTitle ">
        Let's add some ingredients from the left and explore the wine options
        that will match!
      </div>
      <br></br>
      <div>FROM YOUR LIST:</div>
      <br></br>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>MAIN INGREDIENT</td>
            {ingredients.main.length > 1 ? (
              <>
                <td> {ingredients.main}</td>
                <td>remove</td>
              </>
            ) : (
              ''
            )}
          </tr>
          <tr>
            <td>Cooking method</td>
            {ingredients.method.length > 1 ? (
              <>
                <td> {ingredients.method}</td>
                <td>remove</td>
              </>
            ) : (
              ''
            )}
          </tr>
          <tr>
            <td>Side dish</td>
            {ingredients.side.length > 1 ? (
              <>
                <td> {ingredients.main}</td>
                <td>remove</td>
              </>
            ) : (
              ''
            )}
          </tr>
          <tr>
            <td>Spices</td>
            {ingredients.spices.length > 1 ? (
              <>
                <td> {ingredients.main}</td>
                <td>remove</td>
              </>
            ) : (
              ''
            )}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Plate;
