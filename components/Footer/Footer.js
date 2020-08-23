import {
  Container,
  Grid,
  FirstGroup,
  SecondGroup,
  ThirdGroup,
  Text,
  Button,
} from "./style";

export default function Footer() {
  return (
    <Container>
      <Grid>
        <Text>Voxxer</Text>
        <FirstGroup>
          <Text>Platform</Text>
          <Text>Help Center</Text>
          <Text>Security</Text>
        </FirstGroup>
        <SecondGroup>
          <Text>Customers</Text>
          <Text>Use Cases</Text>
          <Text>Customer Stories</Text>
        </SecondGroup>
        <ThirdGroup>
          <Text>company</Text>
          <Text>About</Text>
          <Text>
            Careers <span>- We're hiring</span>
          </Text>
        </ThirdGroup>
        <Button>Apply</Button>
      </Grid>
    </Container>
  );
}
