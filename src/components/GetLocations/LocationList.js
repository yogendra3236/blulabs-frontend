import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 500px;
`;

const Item = styled.div`
  cursor: pointer;
`;

const LocationList = ({ pumps = [], history }) => {
  const results = pumps.map((l) => (
    <Item
      key={l?._id}
      onClick={() => history.push(`/booking?id=${l?._id}`)}
      className="list-group-item list-group-item-action"
    >
      <div>{l?.pumpName}</div>
      <div>{l?.locationName}</div>
    </Item>
  ));

  return (
    <Wrapper>
      <div className="list-group">{results}</div>
    </Wrapper>
  );
};

export default LocationList;
