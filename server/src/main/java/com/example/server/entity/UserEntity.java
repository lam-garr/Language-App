package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Data
@Table(name="language_users")
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id
    @Column(name="id")
    private String id;
    @Column(name="username")
    private String username;
    @Column(name="password")
    @JsonIgnore
    private String password;
    @Column(name="created")
    private String created;
}
