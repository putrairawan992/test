import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailHsCode, getDetailTarif, listCountry, listPelabuhan } from '../../redux/actions/indsw_devicls';
import { AutoComplete, Form, Input } from 'antd';
import useDidMountEffect from '../../helpers/useDidMountEffect';
import TextArea from 'antd/es/input/TextArea';

const FormHome = () => {
    const [value, setValue] = useState('');
    const [kdNegara, setKdNegara] = useState('')
    const [desc, setDesc] = useState('')
    const initialParams = {
        ur_negara: undefined,
        ur_pelabuhan: undefined,
        kd_negara: undefined,
        result_hs: "",
        tarif_mb: "",
        total_biaya: "",
    }
    const [params, setParams] = useState(initialParams);
    const data = useSelector(state => (state.list));
    const dispatch = useDispatch();

    useDidMountEffect(() => {
        dispatch(listCountry({ params }));
    }, [params]);

    const actionChangeCountry = (values) => {
        console.log("actionChangeCountry", values);
        setParams({ ...params, ur_negara: values });
    }

    const actionChangePelabuhan = (values) => {
        console.log(values);
        dispatch(listPelabuhan({ params: { kd_negara: kdNegara, ur_pelabuhan: values } }));
        console.log("DATA STATE: ", data);
    }

    const onSelectCountry = (data, test) => {
        setParams({ ...params, kd_negara: data });
        setParams({ ...params, ur_negara: test.label });
        setKdNegara(data)
        // console.log("PARAMS", test.label);
        console.log('onSelectCountry', data);
    };


    const onSelectPelabuhan = (data, test) => {
        setParams({ ...params, ur_pelabuhan: test.label });
        console.log('onSelectPelabuhan', data);
    };

    const actionChangeHSCode = (event) => {
        console.log(event.target.value);
        dispatch(getDetailHsCode({ params: { hs_code: event.target.value } }));
        dispatch(getDetailTarif({ params: { hs_code: event.target.value } }));
        console.log("DATA STATE: ", data);
        setParams({
            ...params,
            result_hs: `${data?.listDetailHs?.data !== undefined ? data?.listDetailHs?.data[0]?.sub_header : ""} ${data?.listDetailHs?.data !== undefined ? data?.listDetailHs?.data[0].uraian_id : ""}`
        });
        setDesc(`${data?.listDetailHs?.data !== undefined ? data?.listDetailHs?.data[0]?.sub_header : ""} ${data?.listDetailHs?.data !== undefined ? data?.listDetailHs?.data[0].uraian_id : ""}`)
        setParams({
            ...params,
            tarif_mb: `${data?.listDetailTarif?.data !== undefined ? data?.listDetailTarif?.data[0]?.bm : ""}`
        });
    }

    const actionChangeHarga = (event) => {
        const harga = parseInt(event.target.value) || 0;
        const percent = parseInt(params.tarif_mb) || 0;

        const result = harga * (percent / 100);
        setParams({ ...params, total_biaya: result.toString() })
    }

    const optionsCountry = data?.listCountry?.data?.map((value) => ({ label: value.ur_negara, value: value.kd_negara }))
    const optionsPelabuhan = data?.listPelabuhan?.data?.map((value) => ({ label: value.ur_pelabuhan, value: value.kd_pelabuhan }))

    return (
        <Form style={{ width: 400, padding: 25 }}>
            <Form.Item label="Negara">
                <AutoComplete
                    options={optionsCountry}
                    value={params.ur_negara}
                    onSelect={onSelectCountry}
                    onChange={actionChangeCountry}
                    placeholder="input country"
                />
            </Form.Item>
            <Form.Item label="Pelabuhan">
                <AutoComplete
                    options={optionsPelabuhan}
                    value={params.ur_pelabuhan}
                    onSelect={onSelectPelabuhan}
                    onChange={actionChangePelabuhan}
                    placeholder="input pelabuhan"
                />
            </Form.Item>
            <Form.Item label="Barang">
                <Input placeholder='HS Code' onChange={(e) => actionChangeHSCode(e)} style={{ marginBottom: '10px' }} />
                <TextArea readOnly rows={4} value={desc} />
            </Form.Item>

            <Form.Item label="Harga">
                <Input onChange={(e) => actionChangeHarga(e)} />
            </Form.Item>
            <Form.Item label="Tarif Bea Masuk">
                <Input readOnly suffix="%" value={params.tarif_mb} />
                <div style={{ display: "flex", width: "300px", marginTop: "10px" }}>
                    <Input readOnly style={{ marginRight: "10px" }} value={params.total_biaya} />
                    <span>Harga x tarif mb %</span>
                </div>
            </Form.Item>
        </Form>
    );
};

export default FormHome;