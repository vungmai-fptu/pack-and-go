package com.packandgo.tripdiary.model.mail;

import org.thymeleaf.context.Context;

public class ResetPasswordMailContent extends MailContent {
    private String siteURL;
    private String resetPasswordToken;
    private final String RESET_PASSWORD_EMAIL_LOCATION = "reset-password-email";

    public ResetPasswordMailContent(String toEmail, String resetPasswordToken, String siteURL) {
        super();
        this.toEmail = toEmail;
        this.siteURL = siteURL;
        this.resetPasswordToken = resetPasswordToken;
        this.subject = "RESET PASSWORD REQUEST";
        this.buildBody();
    }

    @Override
    public void buildBody() {

        String verifyURL = siteURL + "/user/change-password?token=" + resetPasswordToken;
        Context context = new Context();
        context.setVariable("resetPasswordUrl", verifyURL);
        String htmlBody = this.templateEngine.process(RESET_PASSWORD_EMAIL_LOCATION, context);

        this.body = htmlBody;
    }

    public String getSiteURL() {
        return siteURL;
    }

    public void setSiteURL(String siteURL) {
        this.siteURL = siteURL;
    }

    public String getResetPasswordToken() {
        return resetPasswordToken;
    }

    public void setResetPasswordToken(String resetPasswordToken) {
        this.resetPasswordToken = resetPasswordToken;
    }
}
