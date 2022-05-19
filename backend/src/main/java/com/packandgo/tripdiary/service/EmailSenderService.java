package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.model.MailContent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailSenderService {

    @Autowired
    private JavaMailSender mailSender;

    public boolean sendEmail(MailContent mailContent) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("leson131002@gmail.com");
        message.setTo(mailContent.getToEmail());
        message.setSubject(mailContent.getSubject());
        message.setText(mailContent.getBody());

        try {
            mailSender.send(message);
            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }
    }

    public boolean sendEmailWithAttachment(MailContent content, String attachment) throws MessagingException {
        MimeMessage mimMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimMessage, true);
        mimeMessageHelper.setFrom("leson131002@gmail.com");
        mimeMessageHelper.setTo(content.getToEmail());
        mimeMessageHelper.setText(content.getBody());
        mimeMessageHelper.setSubject(content.getSubject());

        FileSystemResource fileSystem = new FileSystemResource(new File(attachment));
        mimeMessageHelper.addAttachment(fileSystem.getFilename(), fileSystem);

        try {
            mailSender.send(mimMessage);
            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
