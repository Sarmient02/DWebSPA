package com.example.personaBACKEND.service;

import com.example.personaBACKEND.model.TipoDocumento;
import com.example.personaBACKEND.repository.TipoDocumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class TipoDocumentoService implements TipoDocumentoRepository {

    @Autowired
    private TipoDocumentoRepository tipoDocumentoRepository;

    @Override
    public List<TipoDocumento> findAll() {
        return tipoDocumentoRepository.findAll();
    }

    @Override
    public List<TipoDocumento> findAll(Sort sort) {
        return tipoDocumentoRepository.findAll(sort);
    }

    @Override
    public Page<TipoDocumento> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<TipoDocumento> findAllById(Iterable<Long> longs) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {
        tipoDocumentoRepository.deleteById(aLong);
    }

    @Override
    public void delete(TipoDocumento entity) {
        tipoDocumentoRepository.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends TipoDocumento> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends TipoDocumento> S save(S entity) {
        return null;
    }

    @Override
    public <S extends TipoDocumento> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<TipoDocumento> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends TipoDocumento> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends TipoDocumento> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<TipoDocumento> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public TipoDocumento getOne(Long aLong) {
        return null;
    }

    @Override
    public TipoDocumento getById(Long aLong) {
        return null;
    }

    @Override
    public TipoDocumento getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends TipoDocumento> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends TipoDocumento> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends TipoDocumento> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends TipoDocumento> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends TipoDocumento> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends TipoDocumento> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends TipoDocumento, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
