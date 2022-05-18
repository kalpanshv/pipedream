import common from "../common.mjs";

export default {
  ...common,
  key: "postmark-new-inbound-email-received",
  name: "New Inbound Email Received",
  description:
    "Emit new event when an email is received by the Postmark server [(See docs here)](https://postmarkapp.com/developer/webhooks/inbound-webhook)",
  version: "0.0.1",
  type: "source",
  hooks: {
    async activate() {
      return this.postmark.setServerInfo({
        InboundHookUrl: this.http.endpoint,
      });
    },
    async deactivate() {
      return this.postmark.setServerInfo({
        InboundHookUrl: "",
      });
    },
  },
};
