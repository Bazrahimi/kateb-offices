// app/_ui/email/templates/NewApplication.tsx
import EmailLayout from "@/app/_ui/email/layout/EmailLayout";
import type { Application } from "@/app/join-workspaces/application/_lib/schema";
import { Hr, Text } from "@react-email/components";

type Props = {
  data: Application;
  dontReplyNote?: boolean;
  dontReplyFarsiNote?: boolean;
};

export default function NewApplication({
  data,
  dontReplyNote = true,
  dontReplyFarsiNote = false,
}: Props) {
  return (
    <EmailLayout
      preview={`${data.firstName} ${data.lastName}`}
      title="New Workspace Application Received"
    >
      <Text>
        <strong>Membership:</strong> {data.membership}
      </Text>

      <Hr />

      <Text>
        <strong>Business Name:</strong> {data.businessName}
      </Text>

      {data.abn ? (
        <Text>
          <strong>ABN:</strong> {data.abn}
        </Text>
      ) : null}

      {data.industry ? (
        <Text>
          <strong>Industry:</strong> {data.industry}
        </Text>
      ) : null}

      <Text>
        <strong>Organisation Address:</strong> {data.address}
      </Text>
      <Text>
        <strong>Organisation City:</strong> {data.city}
      </Text>
      <Text>
        <strong>Organisation State:</strong> {data.state}
      </Text>
      <Text>
        <strong>Organisation Postcode:</strong> {data.postcode}
      </Text>

      <Hr />

      <Text>
        <strong>Billing First Name:</strong> {data.firstName}
      </Text>
      <Text>
        <strong>Billing Last Name:</strong> {data.lastName}
      </Text>
      <Text>
        <strong>Email:</strong> {data.email}
      </Text>
      <Text>
        <strong>Phone Number:</strong> {data.phoneNumber}
      </Text>
      <Text>
        <strong>Billing same as organisation address:</strong>{" "}
        {data.billingSameAsAbove ? "Yes" : "No"}
      </Text>

      {!data.billingSameAsAbove ? (
        <>
          {data.billingAddress ? (
            <Text>
              <strong>Billing Address:</strong> {data.billingAddress}
            </Text>
          ) : null}

          {data.billingCity ? (
            <Text>
              <strong>Billing City:</strong> {data.billingCity}
            </Text>
          ) : null}

          {data.billingState ? (
            <Text>
              <strong>Billing State:</strong> {data.billingState}
            </Text>
          ) : null}

          {data.billingPostcode ? (
            <Text>
              <strong>Billing Postcode:</strong> {data.billingPostcode}
            </Text>
          ) : null}
        </>
      ) : null}

      {dontReplyNote ? (
        <>
          <Hr />
          <Text
            style={{ fontSize: "12px", color: "#6b7280", lineHeight: "18px" }}
          >
            <strong>Note:</strong> Please do not reply to this email. This inbox
            is for website submissions only.
          </Text>

          {dontReplyFarsiNote ? (
            <Text
              style={{
                fontSize: "12px",
                color: "#6b7280",
                lineHeight: "18px",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              <strong>یادآوری:</strong> لطفاً به این ایمیل پاسخ ندهید. این ایمیل
              فقط برای دریافت پیام‌های وبسایت است.
            </Text>
          ) : null}
        </>
      ) : null}
    </EmailLayout>
  );
}