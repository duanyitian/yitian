package com.example.demo.controller;

/**
 * 段
 * Created by Heyiyong on 2019/3/19.
 */

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class HelloController {

    @RequestMapping("/hello")
    private String index(){
        return "Hello World!";
    }
}
