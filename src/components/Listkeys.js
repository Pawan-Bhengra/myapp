function NumberList(props) {
  const numbere = [1, 2, 3, 4, 5];
  const numbers = props.numbere;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

export default NumberList;

