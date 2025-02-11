import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { 
  ContactContainer, 
  FormGroup, 
  Span, 
  Label, 
  ButtonContainer,
  ChallengeOption,
  ChallengeLabel,
  Checkbox,
  OtherInputContainer 
} from "./styles";
import { ContactProps, challengeOptions } from "./types";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [otherValue, setOtherValue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleChallengeChange = (challenge: string) => {
    let updatedChallenges: string[];
    
    if (challenge === "Other") {
      if (selectedChallenges.includes("Other")) {
        updatedChallenges = selectedChallenges.filter(c => c !== "Other");
        setOtherValue("");
      } else {
        updatedChallenges = [...selectedChallenges, "Other"];
      }
    } else {
      updatedChallenges = selectedChallenges.includes(challenge)
        ? selectedChallenges.filter(c => c !== challenge)
        : [...selectedChallenges, challenge];
    }
    
    setSelectedChallenges(updatedChallenges);
    handleChange("challenges", updatedChallenges);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    const validationErrors = handleSubmit(e);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      
      try {
        const formData = new FormData();
        formData.append("entry.602484349", values.name);
        formData.append("entry.1839736380", values.email);
        formData.append("entry.1820855826", values.message);

        values.challenges.forEach(challenge => {
          if (challenge !== "Other") {
            formData.append("entry.1030791043", challenge);
          }
        });

        if (selectedChallenges.includes("Other") && otherValue) {
          formData.append("entry.1030791043", "__other_option__");
          formData.append("entry.1030791043.other_option_response", otherValue);
        }

        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSe--YtN0fxM3LnliIBA4yLyhVLimQG0Tbq_MDDfQFB03XhfJg/formResponse",
          {
            method: "POST",
            mode: "no-cors",
            body: formData,
          }
        );

        setLoading(false);
        setSuccessMessage("Thank you for your message. We'll get back to you soon!");
        
        // Reset form
        setSelectedChallenges([]);
        setOtherValue("");
        handleChange("name", "");
        handleChange("email", "");
        handleChange("message", "");
        handleChange("challenges", []);
        handleChange("otherChallenge", "");
      } catch (error) {
        setLoading(false);
        setSuccessMessage("There was an error sending your message. Please try again.");
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Block title={title} content={content} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <FormGroup onSubmit={submitForm}>
            <Col span={24}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={values.name}
                onChange={handleInputChange}
              />
              {errors.name && <Span>{errors.name}</Span>}
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="email"
                placeholder="Your Email"
                value={values.email}
                onChange={handleInputChange}
              />
              {errors.email && <Span>{errors.email}</Span>}
            </Col>
            <Col span={24}>
              <Label>What is your challenge in leading your team?</Label>
              {[...challengeOptions, "Other"].map((challenge) => (
                <ChallengeOption key={challenge}>
                  <ChallengeLabel>
                    <Checkbox
                      type="checkbox"
                      checked={selectedChallenges.includes(challenge)}
                      onChange={() => handleChallengeChange(challenge)}
                    />
                    {challenge}
                  </ChallengeLabel>
                  {challenge === "Other" && selectedChallenges.includes("Other") && (
                    <OtherInputContainer>
                      <input
                        type="text"
                        className="other-input"
                        name="otherChallenge"
                        placeholder="Your challenge"
                        value={otherValue}
                      onChange={(e) => {
                        setOtherValue(e.target.value);
                        handleChange("otherChallenge", e.target.value);
                      }}
                      />
                    </OtherInputContainer>
                  )}
                </ChallengeOption>
              ))}
              {errors.challenges && Array.isArray(errors.challenges) && (
                <Span>{errors.challenges[0]}</Span>
              )}
            </Col>
            <Col span={24}>
              <TextArea
                placeholder="Your Message"
                value={values.message}
                name="message"
                onChange={handleInputChange}
              />
              {errors.message && <Span>{errors.message}</Span>}
            </Col>
            <ButtonContainer>
              {successMessage && (
                <Span style={{ color: successMessage.includes("error") ? "#ff4d4f" : "#52c41a", marginBottom: "1rem" }}>
                  {successMessage}
                </Span>
              )}
              <Button 
                name="submit"
                color={loading ? "secondary" : "primary"}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </ButtonContainer>
          </FormGroup>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
