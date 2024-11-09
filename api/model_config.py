import pickle

# ============================= MODELS LOADER =============================
models = {
    "ss-bin-1": "ss-binary-1.pkl"
}
# =========================================================================

loaded_models = {}

for name in models.keys():
    try:
        loaded_models[name] = pickle.load(open('./models/'+models[name], 'rb'))
    except Exception as e:
        continue

def get_model(name):
    if name not in loaded_models.keys():
        return None
    else:
        return loaded_models[name]

def exists_model(name):
    return name in loaded_models.keys()

def get_loaded_models():
    return list(loaded_models.keys())

def get_integer_cols(model: str):
    arr = []
    match model:
        case _:
            arr = [
                'sport', 'dsport', 'sbytes', 'dbytes', 'sttl', 'dttl', 'sloss', 'dloss', 'Spkts',
                'Dpkts', 'swin', 'dwin', 'stcpb', 'dtcpb', 'smeansz', 'dmeansz', 'trans_depth',
                'res_bdy_len', 'ct_state_ttl', 'ct_flw_http_mthd', 'ct_ftp_cmd', 'ct_srv_src',
                'ct_srv_dst', 'ct_dst_ltm', 'ct_src_ltm', 'ct_src_dport_ltm', 'ct_dst_sport_ltm',
                'ct_dst_src_ltm'
            ]

    return arr


def get_float_cols(model: str):
    arr = []
    match model:
        case _:
            arr = [
                'dur', 'sload', 'dload', 'sjit', 'djit', 'sintpkt', 'dintpkt', 'tcprtt', 'synack', 'ackdat'
            ]

    return arr


def get_binary_cols(model: str):
    arr = []
    match model:
        case _:
            arr = ['is_sm_ips_ports', 'is_ftp_login', 'label']

    return arr


def get_default_expected_features(model: str):
    arr = []
    match model:
        case _:
            arr = [
                'proto_vmtp', 'proto_pup', 'proto_egp', 'synack', 'proto_eigrp', 'proto_unas', 'proto_tlsp', 'proto_ddp',
                'proto_iplt', 'proto_visa', 'dmean', 'proto_uti', 'proto_leaf-1', 'ct_state_ttl', 'proto_pri-enc', 'proto_xns-idp',
                'proto_xtp', 'service_snmp', 'proto_sat-expak', 'proto_ggp', 'proto_ipv6-frag', 'proto_pgm', 'proto_argus',
                'proto_hmp', 'proto_bna', 'proto_prm', 'proto_encap', 'proto_sdrp', 'proto_udp', 'ct_dst_sport_ltm', 'proto_chaos',
                'proto_ifmp', 'proto_wb-mon', 'proto_vrrp', 'dwin', 'proto_ipnip', 'proto_any', 'proto_crudp', 'proto_ospf',
                'proto_tcf', 'dloss', 'dpkts', 'proto_sccopmce', 'proto_sctp', 'proto_compaq-peer', 'proto_pvp', 'proto_i-nlsp',
                'sttl', 'proto_idrp', 'proto_sun-nd', 'response_body_len', 'ct_srv_src', 'proto_cphb', 'proto_sm', 'proto_isis',
                'proto_nsfnet-igp', 'proto_igp', 'proto_rdp', 'proto_cftp', 'proto_merit-inp', 'sbytes', 'proto_sprite-rpc',
                'proto_pnni', 'is_ftp_login', 'dbytes', 'sinpkt', 'proto_ipv6', 'proto_pipe', 'proto_dgp', 'proto_ax.25',
                'proto_dcn', 'proto_skip', 'proto_fire', 'proto_ipip', 'sload', 'trans_depth', 'proto_sep', 'proto_iatp',
                'proto_ib', 'ct_srv_dst', 'proto_larp', 'proto_vines', 'swin', 'proto_cpnx', 'dinpkt', 'proto_mtp', 'proto_rsvp',
                'proto_ip', 'proto_stp', 'dttl', 'proto_aes-sp3-d', 'proto_igmp', 'proto_il', 'proto_fc', 'service_dhcp',
                'ct_dst_ltm', 'proto_scps', 'proto_xnet', 'proto_iso-tp4', 'proto_mobile', 'service_radius', 'sloss', 'proto_ipcv',
                'proto_idpr', 'proto_l2tp', 'proto_trunk-2', 'proto_etherip', 'spkts', 'proto_qnx', 'proto_idpr-cmtp', 'dtcpb',
                'state_INT', 'tcprtt', 'is_sm_ips_ports', 'proto_ipv6-no', 'proto_ipcomp', 'proto_wb-expak', 'proto_zero',
                'proto_smp', 'ct_src_dport_ltm', 'proto_crtp', 'proto_snp', 'proto_sps', 'proto_sat-mon', 'proto_gmtp',
                'proto_ptp', 'ackdat', 'proto_ippc', 'proto_srp', 'stcpb', 'ct_flw_http_mthd', 'proto_ipv6-route', 'proto_irtp',
                'proto_ttp', 'proto_iso-ip', 'dur', 'proto_a/n', 'dload', 'proto_mfe-nsp', 'proto_tp++', 'proto_mhrp', 'proto_gre',
                'proto_secure-vmtp', 'rate', 'proto_br-sat-mon', 'djit', 'ct_ftp_cmd', 'proto_bbn-rcc', 'proto_trunk-1',
                'proto_netblt', 'proto_aris', 'smean', 'proto_narp', 'service_dns', 'proto_ddx', 'proto_leaf-2', 'proto_3pc',
                'service_-', 'proto_emcon', 'proto_ipv6-opts', 'proto_pim', 'proto_ipx-n-ip', 'proto_swipe', 'proto_wsn',
                'ct_dst_src_ltm', 'proto_kryptolan', 'proto_nvp', 'proto_micp', 'ct_src_ltm', 'sjit'
            ]

    return arr
