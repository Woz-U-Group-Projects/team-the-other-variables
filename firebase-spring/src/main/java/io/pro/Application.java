package io.pro;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.core.Constants;

@SpringBootApplication
public class Application {
	
	static String FB_BASE_URL="https://byop-87630.firebaseio.com/";

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		try {
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials
							.fromStream(new ClassPathResource("/firebase-authentication.json").getInputStream()))
					.setDatabaseUrl(Constants.WIRE_PROTOCOL_VERSION).build();
			if (FirebaseApp.getApps().isEmpty()) {
				FirebaseApp.initializeApp(options);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
