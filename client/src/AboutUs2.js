import { borderColor } from '@mui/system';
import * as React from 'react';

// import Container from '@mui/material/Container';

import styled from 'styled-components'


const Wrapper = styled.div`
height:100%;
padding: 1px;
display:grid;
gap:1rem;
grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));
`

const Left = styled.div`
padding:10px;
display:grid;
grid-template-rows: 0.3fr 0.3fr 0.1fr;
grid-row-gap: 1px;
`


const Right = styled.div`


floating:right;
padding:20px;
display:grid;
grid-template-rows: min-content auto;
grid-row-gap: 30px;
`

const Container = styled.div`


display: flex;
display:grid;
grid-template-rows: max-content auto;
grid-row-gap:10px;
justify-content: flex-start;
`

const SectionTitle = ({ text }) => <h2 style={{ color: 'black' }}>{text}</h2>



const ProfileContainer = () => <Container>
    <SectionTitle text='Profile' />
    <p style={{ fontSize: '1.2em', color: 'white' }}>
        An honest and reliable worker, I excel at juggling many responsibilities and problem-solving while maintaining excellent interpersonal skills. Always eager to learn new things, I take what I have been taught and determine how to best apply it.
    </p>
</Container>

const ContactContainer = () => <Container>
    <SectionTitle text='Contact' />
    <ul style={{ fontSize: '1.5em', color: 'white' }}>
        <li>
            PHONE:  +972549955695
        </li>
        <li>
            ADDRESS: Dizengoff Street 173, Apt 7 Tel Aviv
        </li>
        <li>
            EMAIL: shaydilouya@yahoo.com
            EMAIL2: shaydilouya@gmail.com
        </li>
    </ul>
</Container>

const LanguagesContainer = () => <Container>
    <SectionTitle text='Languages' />
    <ul style={{ fontSize: '1.4em', color: 'white' }}>
        <li>
            Hebrew (Native)
        </li>
        <li>
            English (Fluent)
        </li>
        <li>
            Chinese (Fluent)
        </li>
        <li>
            Spanish (Basic)
        </li>
    </ul>
</Container>

const WorkContainer = () => <Container style={{ fontSize: '1.2em', color: 'white' }}>
    <SectionTitle text='Work Experience' />
    <p>
        Payton Planar Magnetics (www.paytongroup.com), Global Leader for Planar Transformers-
        Company Representative in China - 2016–2020.<br />


        This multifaceted role required involvement in many fields in the electronic industry, including:
        Subcontractors in China and Philippines – Oversaw quality of production and products. Ensured subcontractors met required industry and company standards. Sample tested critical products electrically, mechanically, and visually. Responsible for technical contact, investigations, and solutions for urgent matters as well as product preparations ahead of external audits.
        Material Suppliers – Worked with many suppliers for metals, plastics, automation, and electronics, developing and maintaining relationships. Verified suppliers’ quality level as well as originality of raw materials. Responsible for solutions to delivery times, quality, and prices issues.
        Customers – Worked with many high-level customers globally, mainly focused on the automotive industry. Served as preliminary responder for special requests or quality issues, and, when urgent, flew directly to customers’ factories for rapid and successful problem-solving.
    </p>
</Container>
const EducationContainer = () => <Container>
    <SectionTitle text='Education' />
    <div style={{ fontSize: '1.2em', color: 'white' }}>
        <u >Tel Hai Academic College - 2012 - 2016</u><br />
        <p>Bachelor’s Degree - Double major in East Asia Studies and Economics and Management</p><br />
        <u>Courses and Certifications</u><br />
        <ul style={{ fontSize: '1.1em', color: 'white' }}>
            <li>
                - Internal Quality Auditor for IATF16949:2016 (Automotive Industry) – The Standards Institution of Israel, July 2018        </li>
            <li>
                - Lead Quality Auditor for ISO9001:2015 – The Standards Institution of Israel, February 2018        </li>
            <li>
                - Chinese HSK3 Course – Sichuan Normal University Chengdu College, 2015        </li>
            <li>
                - Chinese HSK4 Course – Sichuan Normal University Chengdu College, 2016        </li>
        </ul>

        <div></div><br />
    </div>
</Container>

export const AboutUs2 = () => {
    return (
        <Wrapper style={{ boxSizing: "borderbox" }}>
            <Left>
                <EducationContainer />
                <ProfileContainer />
                <LanguagesContainer />
            </Left>
            <Right>
                <WorkContainer />
                <ContactContainer />
            </Right>
        </Wrapper>
    )
}