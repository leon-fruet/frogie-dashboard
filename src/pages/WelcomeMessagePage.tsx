import {Button, Container, Flex, Page, Select, TextArea, Title} from "../utils/styles";

export const WelcomeMessagePage = () =>
    <Page>
        <Container>
            <Title>Update Welcome Message</Title>
            <div>
                <div>
                    <label>Current Channel</label>
                </div>
                <Select style={{marginTop: '10px '}}>
                    <option disabled>Please Select a Channel</option>
                    <option>#welcome (123)</option>
                    <option>124</option>
                    <option>125</option>
                    <option>126</option>
                </Select>
                <section style={{margin: '10px 0'}}>
                    <div>
                        <label htmlFor="welcome-message">Welcome Message</label>
                    </div>
                    <TextArea style={{marginTop: '10px '}} id="welcome-message" />
                </section>
                <Flex justifyContent="flex-end">
                    <Button variant="secondary" style={{marginRight: '8px'}}>Reset</Button>
                    <Button variant="primary" type= "submit">Save</Button>
                </Flex>
            </div>
        </Container>
    </Page>