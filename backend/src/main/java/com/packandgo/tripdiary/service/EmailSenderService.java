package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.model.MailContent;
import com.packandgo.tripdiary.model.User;
import org.springframework.mail.SimpleMailMessage;

import javax.mail.MessagingException;

public interface EmailSenderService {
    public void sendResetPasswordEmail(User user, String token, String contextPath);
    public void sendVerificationEmail(User user, String url);
}
