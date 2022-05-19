package com.packandgo.tripdiary;

import com.packandgo.tripdiary.model.MailContent;
import com.packandgo.tripdiary.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class BackendApplication {

    @Autowired
    EmailSenderService mailService;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void triggerMail() {
        MailContent content = new MailContent();
        content.setToEmail("sonlnse160171@fpt.edu.vn");
        content.setSubject("TEST EMAIL SPRING BOOT");
        content.setBody("Hello email");

        String attachment = "C:\\Users\\lengo\\OneDrive\\Pictures\\SE160171_LÊ NGỌC SƠN.jpg";

        try {
            boolean result = mailService.sendEmailWithAttachment(content, attachment);
            if (result) {
                System.out.println("Sent email successfully");
            } else {

            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Sent email failed");
        }

    }
}
