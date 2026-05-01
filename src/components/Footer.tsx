import React from 'react';
import styled from 'styled-components';
import FooterLogo from '../assets/logo-images/footer-logo.png';
import { cooperationIconData, socialIconData } from '../data/FooterData';

const FooterBox = styled.div`
  background-color: #111;
  margin-top: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 0px;
  gap: 24px;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0;
    padding: 24px 0px;
  }
`;

const Section = styled.div`
  color: #9aa0a6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 33.33%;
  font-family: Battambang, Arial, Helvetica, sans-serif;
  @media (max-width: 992px) {
    width: 100%;
    padding: 20px 0px;
    border-bottom: 1px solid #2a2a2a;
    &:last-child {
      border-bottom: none;
    }
  }
  @media (max-width: 576px) {
    align-items: center;
    text-align: center;
  }
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;

const IconImg = styled.img`
  height: 28px;
  @media (max-width: 576px) {
    height: 24px;
  }
`;

const Text = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.6;
  font-family: Battambang, Arial, Helvetica, sans-serif;
`;

const SectionTitle = styled.h4`
  font-size: 17px;
  color: #fff;
  margin: 0 0 4px;
`;

const SubText = styled.p`
  margin: 0;
  font-family: Battambang, Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 1.6;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #2a2a2a;
  padding-top: 12px;
  margin-top: 4px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterBox>
      <Wrapper className="container">
        <Section>
          <img
            src={FooterLogo}
            height="70px"
            alt="sabay footer logo"
          />
          <Text>រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Sabay ឆ្នាំ​២០១៦</Text>
          <Text>គោលការណ៍​ភាព​ឯកជន | Privacy Policy</Text>
          <Divider />
          <SubText>អាសយដ្ឋាន</SubText>
          <SubText>អគារ​លេខ ៣០៨ មហាវិថីព្រះមុន្នីវង្ស</SubText>
          <SubText>សង្កាត់បឹងរាំង ខណ្ឌដូនពេញ</SubText>
        </Section>

        <Section>
          <SectionTitle>អំពីយើង</SectionTitle>
          <Text>
            Sabay Digital Corporation ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល
            និង​កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។ ព័ត៌មាន​បន្ថែម
          </Text>
          <Text>ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay</Text>
          <IconRow>
            {cooperationIconData.map((e) => (
              <IconImg key={e.alt} src={e.icon} alt={e.alt} />
            ))}
          </IconRow>
        </Section>

        <Section>
          <SectionTitle>ជួបគ្នានៅបណ្តាញសង្គម</SectionTitle>
          <IconRow>
            {socialIconData.map((e) => (
              <IconImg key={e.alt} src={e.icon} alt={e.alt} style={{ height: 36 }} />
            ))}
          </IconRow>
          <Divider />
          <SubText>ទំនាក់ទំនង</SubText>
          <SubText>info@sabay.com</SubText>
          <SubText>023 228 000</SubText>
        </Section>
      </Wrapper>
    </FooterBox>
  );
};
