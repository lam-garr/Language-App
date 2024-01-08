package com.example.server.entity;

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
@Table(name="language_jpn")
@NoArgsConstructor
@AllArgsConstructor
public class JapaneseEntity {
    @Id
    @Column(name="id")
    private String id;
    @Column(name="contents")
    private String contents;
}
