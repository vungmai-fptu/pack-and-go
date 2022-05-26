package com.packandgo.tripdiary.service.impl;

import com.packandgo.tripdiary.model.MailContent;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


@Service
public class EmailSenderServiceImpl implements EmailSenderService {

    @Autowired
    public JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String FROM_EMAIL_SENDER;


    private boolean sendEmail(MimeMessage email) {
        try {
            mailSender.send(email);
            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }
    }

    private MimeMessage constructEmail(MailContent mailContent) throws MessagingException {
        MimeMessage email = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(email, true, "utf-8");
        helper.setText(mailContent.getBody(), true);
        helper.setFrom(FROM_EMAIL_SENDER);
        helper.setTo(mailContent.getToEmail());
        helper.setSubject(mailContent.getSubject());

        return email;

    }


    public void sendResetPasswordEmail(User user, String token, String siteURL) {
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">Click here to change password</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        String url = siteURL + "/user/changePassword?token=" + token;

        content = content.replace("[[name]]", user.getUsername());
        content = content.replace("[[URL]]", url);
        MailContent mailContent = new MailContent();
        mailContent.setToEmail(user.getEmail());
        mailContent.setSubject("RESET PASSWORD REQUEST");
        mailContent.setBody(content);

        try {
            MimeMessage email = constructEmail(mailContent);
            boolean isSuccess = sendEmail(email);
            if (!isSuccess) {
                throw new IllegalArgumentException("Can't resolve email");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Can't resolve email");
        }

    }

    @Override
    public void sendVerificationEmail(User user, String siteURL) {

        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        String verifyURL = siteURL + "/api/auth/verify?token=" + user.getVerifyToken();
        content = content.replace("[[name]]", user.getUsername());
        content = content.replace("[[URL]]", verifyURL);

        MailContent mailContent = new MailContent();
        mailContent.setToEmail(user.getEmail());
        mailContent.setSubject("Verify Email");
        mailContent.setBody(content);

        try {
            MimeMessage message = constructEmail(mailContent);
            boolean isSent = sendEmail(message);
            if (!isSent) {
                throw new IllegalArgumentException("Can't resolve email");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalArgumentException("Can't resolve email");
        }
    }
}