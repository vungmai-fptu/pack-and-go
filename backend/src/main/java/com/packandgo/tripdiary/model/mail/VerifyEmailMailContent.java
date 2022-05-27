package com.packandgo.tripdiary.model.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

public class VerifyEmailMailContent extends MailContent {
    private String siteURL;
    private String verifyToken;
    private final String REGISTRATION_EMAIL_LOCATION = "registration-email";


    @Autowired
    public VerifyEmailMailContent(String toEmail, String verifyToken, String siteURL) {
        this.toEmail = toEmail;
        this.siteURL = siteURL;
        this.verifyToken = verifyToken;
        this.subject = "VERIFY REGISTRATION";
        this.buildBody();
    }

    @Override
    public void buildBody() {
        String verifyURL = siteURL + "/api/auth/verify?token=" + this.verifyToken;
        Context context = new Context();
        context.setVariable("registrationUrl", verifyURL);
        String htmlBody = this.templateEngine.process(REGISTRATION_EMAIL_LOCATION, context);

        this.body = htmlBody;
    }

    public String getSiteURL() {
        return siteURL;
    }

    public void setSiteURL(String siteURL) {
        this.siteURL = siteURL;
    }

    public String getVerifyToken() {
        return verifyToken;
    }

    public void setVerifyToken(String verifyToken) {
        this.verifyToken = verifyToken;
    }

}
