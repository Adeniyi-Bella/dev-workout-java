package com.developerworkout.demo;

import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.crypto.Data;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class WorkoutController {
    @GetMapping(value = "/data", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getData() {
        String jsonData = readJsonFromFile(); // Read JSON file content

        return ResponseEntity.ok().body(jsonData);
    }

    private String readJsonFromFile() {
        try {
            // Specify the path to your JSON file
            String filePath = "src/main/resources/data.json";

            // Read JSON file content
            String jsonData = new String(Files.readAllBytes(Paths.get(filePath)));

            return jsonData;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}