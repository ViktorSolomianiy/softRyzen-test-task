import { Container, Title, Kilowatts, Line, Kwh } from "./ElectricityStyled";

export const Electricity = () => {
  return (
    <Container>
      <Title>Electricity we produced for all time</Title>

      <Line></Line>

      <Kilowatts>
        1.134.147.814<Kwh>kWh</Kwh>
      </Kilowatts>
    </Container>
  );
};
