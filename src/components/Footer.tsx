import React from 'react';
import styled from 'styled-components';
import FooterLogo from '../assets/logo-images/footer-logo.png';
import { cooperationIconData, socialIconData } from '../data/FooterData';

const FooterBox = styled.div`
  background-color: black;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 20px 0px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Container = styled.div<{ padding: string; respon?: string }>`
  color: #636b6f;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 33.33%;
  padding: ${(prop) => prop.padding};
  font-family: Battambang, Arial, Helvetica, sans-serif;
  border: 1px solid #eee;
  @media (max-width: 1200px) {
    width: 100%;
    align-items: start;
    padding: 30px 0px;
  }
  @media (max-width: 880px) {
    align-items: center;
    text-align: center;
    display: ${(prop) => prop.respon === 'respon' && 'none'};
  }
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
`;

const ImageBoxItem = styled.img`
  height: 30px;
  padding: 0px 5px;
`;

const Text = styled.p`
  font-size: 14px;
  font-family: Battambang, Arial, Helvetica, sans-serif;
`;

const Title = styled.h4`
  font-size: 20px;
`;

const SubText = styled.p`
  margin: 0px;
  font-family: Battambang, Arial, Helvetica, sans-serif;
  font-size: 12px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterBox>
      <Wrapper className="container">
        <Container padding="15px">
          <img
            src={FooterLogo}
            height="80px"
            style={{ padding: '0px 10px 20px 0px' }}
            alt="sabay footer logo"
          />
          <Text>រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Sabay ឆ្នាំ​២០១៦</Text>
          <Text>គោលការណ៍​ភាព​ឯកជន | Privacy Policy</Text>
          <div>
            <SubText>អាសយដ្ឋាន</SubText>
            <SubText>អគារ​លេខ ៣០៨ មហាវិថីព្រះមុន្នីវង្ស</SubText>
            <SubText>សង្កាត់បឹងរាំង ខណ្ឌដូនពេញ</SubText>
          </div>
        </Container>
        <Container padding="15px 40px 15px 15px" respon="respon">
          <Title>អំពីយើង</Title>
          <Text>
            Sabay Digital Corporation ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល
            និង​កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។ ព័ត៌មាន​បន្ថែម
          </Text>
          <Text>ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay</Text>
          <ImageBox>
            {cooperationIconData.map((e) => (
              <ImageBoxItem key={e.alt} src={e.icon} alt={e.alt} />
            ))}
          </ImageBox>
        </Container>
        <Container padding="15px 15px 15px 80px">
          <Title>ជួបគ្នានៅបណ្តាញសង្គម</Title>
          <ImageBox style={{ padding: '10px 0px 20px 0px' }}>
            {socialIconData.map((e) => (
              <ImageBoxItem key={e.alt} src={e.icon} alt={e.alt} />
            ))}
          </ImageBox>
          <div>
            <SubText>ទំនាក់ទំនង</SubText>
            <SubText>info@sabay.com</SubText>
            <SubText>023 228 000</SubText>
          </div>
        </Container>
      </Wrapper>
    </FooterBox>
  );
};
