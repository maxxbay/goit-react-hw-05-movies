import Container from 'components/Container';
import { FooterWrapper, Wrapper, Copyright, Studios } from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright>Слава Україні</Copyright>
          <Studios>GoIT BootCamp24 - Maxxbay</Studios>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
